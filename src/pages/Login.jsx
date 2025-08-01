import React, { useState } from 'react'
import { Video, Mail, Lock, Building, Globe, User } from 'lucide-react'
import { InputField, SelectField, useFormValidation, validationRules } from '../components/FormComponents'
import { LoadingButton } from '../components/LoadingStates'

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const initialValues = {
    email: '',
    password: '',
    name: '',
    company: '',
    industry: ''
  }

  const getValidationRules = () => {
    const baseRules = {
      email: [validationRules.required, validationRules.email],
      password: [validationRules.required, validationRules.password]
    }

    if (isSignUp) {
      return {
        ...baseRules,
        name: [validationRules.required, validationRules.minLength(2)],
        company: [validationRules.required, validationRules.minLength(2)],
        industry: [validationRules.required]
      }
    }

    return baseRules
  }

  const { values, errors, handleChange, handleBlur, validateAll, reset } = useFormValidation(
    initialValues,
    getValidationRules()
  )

  const industryOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Finance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'retail', label: 'Retail' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'other', label: 'Other' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateAll()) {
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      onLogin()
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleModeSwitch = () => {
    setIsSignUp(!isSignUp)
    reset()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg fade-in">
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
        
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {isSignUp && (
            <div className="space-y-6 slide-up">
              <InputField
                label="Full Name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                placeholder="Enter your full name"
                icon={User}
                required
              />
              
              <InputField
                label="Company"
                name="company"
                type="text"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.company}
                placeholder="Your company name"
                icon={Building}
                required
              />
              
              <SelectField
                label="Industry"
                name="industry"
                value={values.industry}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.industry}
                options={industryOptions}
                placeholder="Select your industry"
                icon={Globe}
                required
              />
            </div>
          )}
          
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            placeholder="Enter your email"
            icon={Mail}
            required
          />
          
          <InputField
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            placeholder="Enter your password"
            icon={Lock}
            required
          />
          
          <LoadingButton
            type="submit"
            loading={isLoading}
            className="w-full btn-primary py-3 text-lg"
            disabled={isLoading}
          >
            {isSignUp ? 'Create Account' : 'Sign In'}
          </LoadingButton>
        </form>
        
        <div className="text-center">
          <button
            type="button"
            onClick={handleModeSwitch}
            className="text-primary-600 hover:text-primary-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-2 py-1 transition-colors"
            disabled={isLoading}
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
