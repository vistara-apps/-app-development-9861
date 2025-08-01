import React, { useState } from 'react'
import { Video, Mail, Lock, Building, Globe } from 'lucide-react'

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    industry: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate login/signup
    onLogin()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Video className="h-12 w-12 text-primary-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {isSignUp ? 'Join ContentFactory' : 'Welcome Back'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isSignUp 
              ? 'Create your account to start personalizing video ads'
              : 'Sign in to your account'
            }
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    required
                    className="input-field pl-10"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <div className="relative">
                  <input
                    name="company"
                    type="text"
                    required
                    className="input-field pl-10"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Building className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <div className="relative">
                  <select
                    name="industry"
                    required
                    className="input-field pl-10"
                    value={formData.industry}
                    onChange={handleChange}
                  >
                    <option value="">Select your industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Globe className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                name="email"
                type="email"
                required
                className="input-field pl-10"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type="password"
                required
                className="input-field pl-10"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full btn-primary py-3 text-lg"
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>
        
        <div className="text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary-600 hover:text-primary-700 text-sm"
          >
            {isSignUp
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign up"
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login