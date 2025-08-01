import React, { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  MousePointer, 
  DollarSign,
  Calendar,
  Download
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const Analytics = () => {
  const [dateRange, setDateRange] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('impressions')

  const performanceData = [
    { date: '2024-01-01', impressions: 12000, clicks: 480, conversions: 24, spend: 1200 },
    { date: '2024-01-02', impressions: 15000, clicks: 600, conversions: 32, spend: 1500 },
    { date: '2024-01-03', impressions: 18000, clicks: 720, conversions: 38, spend: 1800 },
    { date: '2024-01-04', impressions: 14000, clicks: 560, conversions: 28, spend: 1400 },
    { date: '2024-01-05', impressions: 16000, clicks: 640, conversions: 35, spend: 1600 },
    { date: '2024-01-06', impressions: 20000, clicks: 800, conversions: 42, spend: 2000 },
    { date: '2024-01-07', impressions: 22000, clicks: 880, conversions: 48, spend: 2200 }
  ]

  const campaignPerformance = [
    { name: 'Summer Sale 2024', impressions: 45000, conversions: 127, spend: 4500 },
    { name: 'Black Friday', impressions: 32000, conversions: 89, spend: 3200 },
    { name: 'Product Launch', impressions: 28000, conversions: 76, spend: 2800 }
  ]

  const audienceData = [
    { name: 'Tech Professionals', value: 35, color: '#3b82f6' },
    { name: 'Students', value: 25, color: '#10b981' },
    { name: 'Entrepreneurs', value: 20, color: '#f59e0b' },
    { name: 'General Consumers', value: 20, color: '#ef4444' }
  ]

  const keyMetrics = [
    {
      title: 'Total Impressions',
      value: '2.4M',
      change: '+18%',
      isPositive: true,
      icon: Eye
    },
    {
      title: 'Click-Through Rate',
      value: '3.42%',
      change: '+8%',
      isPositive: true,
      icon: MousePointer
    },
    {
      title: 'Conversion Rate',
      value: '2.1%',
      change: '+12%',
      isPositive: true,
      icon: TrendingUp
    },
    {
      title: 'Cost Per Conversion',
      value: '$24.50',
      change: '-15%',
      isPositive: true,
      icon: DollarSign
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Track performance across all your personalized video campaigns
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <select
              className="input-field"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-8 w-8 text-primary-600" />
                <div className={`flex items-center space-x-1 text-sm ${
                  metric.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.isPositive ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span>{metric.change}</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                <p className="text-gray-600 text-sm">{metric.title}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 card p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance Over Time</h3>
            <select
              className="input-field text-sm"
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
            >
              <option value="impressions">Impressions</option>
              <option value="clicks">Clicks</option>
              <option value="conversions">Conversions</option>
              <option value="spend">Spend</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip 
                labelFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey={selectedMetric} 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Audience Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={audienceData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {audienceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {audienceData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="flex-1">{item.name}</span>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Campaign Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={campaignPerformance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="impressions" fill="#3b82f6" name="Impressions" />
            <Bar dataKey="conversions" fill="#10b981" name="Conversions" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Templates</h3>
          <div className="space-y-4">
            {[
              { name: 'Professional Product Showcase', conversions: 127, rate: '3.2%' },
              { name: 'Service Announcement', conversions: 89, rate: '2.8%' },
              { name: 'Brand Story Builder', conversions: 76, rate: '2.4%' }
            ].map((template, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{template.name}</p>
                  <p className="text-sm text-gray-600">{template.conversions} conversions</p>
                </div>
                <span className="text-lg font-bold text-primary-600">{template.rate}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Personalization Impact</h3>
          <div className="space-y-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-700">Industry Targeting</span>
                <span className="text-lg font-bold text-green-600">+24%</span>
              </div>
              <p className="text-xs text-green-600 mt-1">Conversion rate improvement</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-700">Geographic Personalization</span>
                <span className="text-lg font-bold text-blue-600">+18%</span>
              </div>
              <p className="text-xs text-blue-600 mt-1">Engagement rate boost</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-700">Audience Segmentation</span>
                <span className="text-lg font-bold text-purple-600">+31%</span>
              </div>
              <p className="text-xs text-purple-600 mt-1">Click-through rate increase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics