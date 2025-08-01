import React, { useState } from 'react'
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'

// Input Field with Validation
export const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  success,
  required = false,
  placeholder,
  icon: Icon,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type

  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`input-field ${Icon ? 'pl-10' : ''} ${isPassword ? 'pr-10' : ''} ${
            error ? 'input-error' : success ? 'border-success-500 focus:ring-success-500' : ''
          }`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : success ? `${name}-success` : undefined}
          {...props}
        />
        
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        )}
      </div>
      
      {error && (
        <div id={`${name}-error`} className="flex items-center space-x-1 text-error-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
      
      {success && !error && (
        <div id={`${name}-success`} className="flex items-center space-x-1 text-success-600 text-sm">
          <CheckCircle className="h-4 w-4" />
          <span>{success}</span>
        </div>
      )}
    </div>
  )
}

// Select Field with Validation
export const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  success,
  required = false,
  placeholder = 'Select an option',
  icon: Icon,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`input-field ${Icon ? 'pl-10' : ''} ${
            error ? 'input-error' : success ? 'border-success-500 focus:ring-success-500' : ''
          }`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : success ? `${name}-success` : undefined}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
      </div>
      
      {error && (
        <div id={`${name}-error`} className="flex items-center space-x-1 text-error-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
      
      {success && !error && (
        <div id={`${name}-success`} className="flex items-center space-x-1 text-success-600 text-sm">
          <CheckCircle className="h-4 w-4" />
          <span>{success}</span>
        </div>
      )}
    </div>
  )
}

// Textarea Field with Validation
export const TextareaField = ({
  label,
  name,
  value,
  onChange,
  error,
  success,
  required = false,
  placeholder,
  rows = 4,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`input-field resize-none ${
          error ? 'input-error' : success ? 'border-success-500 focus:ring-success-500' : ''
        }`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : success ? `${name}-success` : undefined}
        {...props}
      />
      
      {error && (
        <div id={`${name}-error`} className="flex items-center space-x-1 text-error-600 text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>{error}</span>
        </div>
      )}
      
      {success && !error && (
        <div id={`${name}-success`} className="flex items-center space-x-1 text-success-600 text-sm">
          <CheckCircle className="h-4 w-4" />
          <span>{success}</span>
        </div>
      )}
    </div>
  )
}

// Form Validation Hook
export const useFormValidation = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const validateField = (name, value) => {
    const rules = validationRules[name]
    if (!rules) return ''

    for (const rule of rules) {
      const error = rule(value, values)
      if (error) return error
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const validateAll = () => {
    const newErrors = {}
    let isValid = true

    Object.keys(validationRules).forEach(name => {
      const error = validateField(name, values[name])
      if (error) {
        newErrors[name] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched(Object.keys(validationRules).reduce((acc, key) => ({ ...acc, [key]: true }), {}))
    return isValid
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
    setValues
  }
}

// Common Validation Rules
export const validationRules = {
  required: (value) => !value?.trim() ? 'This field is required' : '',
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return value && !emailRegex.test(value) ? 'Please enter a valid email address' : ''
  },
  minLength: (min) => (value) => 
    value && value.length < min ? `Must be at least ${min} characters` : '',
  maxLength: (max) => (value) => 
    value && value.length > max ? `Must be no more than ${max} characters` : '',
  password: (value) => {
    if (!value) return ''
    if (value.length < 8) return 'Password must be at least 8 characters'
    if (!/(?=.*[a-z])/.test(value)) return 'Password must contain at least one lowercase letter'
    if (!/(?=.*[A-Z])/.test(value)) return 'Password must contain at least one uppercase letter'
    if (!/(?=.*\d)/.test(value)) return 'Password must contain at least one number'
    return ''
  },
  confirmPassword: (value, values) => 
    value !== values.password ? 'Passwords do not match' : ''
}

export default {
  InputField,
  SelectField,
  TextareaField,
  useFormValidation,
  validationRules
}
