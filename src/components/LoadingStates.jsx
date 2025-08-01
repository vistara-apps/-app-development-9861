import React from 'react'
import { Loader2 } from 'lucide-react'

// Loading Spinner Component
export const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  }

  return (
    <Loader2 
      className={`animate-spin text-primary-600 ${sizeClasses[size]} ${className}`}
      aria-label="Loading"
    />
  )
}

// Button Loading State
export const LoadingButton = ({ 
  children, 
  loading = false, 
  disabled = false, 
  className = 'btn-primary',
  ...props 
}) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={`${className} ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <LoadingSpinner size="sm" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}

// Skeleton Components
export const SkeletonCard = () => (
  <div className="card p-6 animate-pulse">
    <div className="loading-skeleton h-48 mb-4"></div>
    <div className="loading-skeleton h-4 mb-2"></div>
    <div className="loading-skeleton h-4 w-3/4 mb-4"></div>
    <div className="flex space-x-2">
      <div className="loading-skeleton h-8 w-20"></div>
      <div className="loading-skeleton h-8 w-20"></div>
    </div>
  </div>
)

export const SkeletonStats = () => (
  <div className="card p-6 animate-pulse">
    <div className="flex items-center justify-between mb-4">
      <div className="loading-skeleton h-6 w-32"></div>
      <div className="loading-skeleton h-8 w-8 rounded-full"></div>
    </div>
    <div className="loading-skeleton h-8 w-20 mb-2"></div>
    <div className="loading-skeleton h-4 w-16"></div>
  </div>
)

export const SkeletonTable = ({ rows = 5 }) => (
  <div className="card overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="loading-skeleton h-6 w-48"></div>
    </div>
    <div className="divide-y divide-gray-200">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="px-6 py-4 animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="loading-skeleton h-10 w-10 rounded-full"></div>
            <div className="flex-1">
              <div className="loading-skeleton h-4 w-32 mb-2"></div>
              <div className="loading-skeleton h-3 w-48"></div>
            </div>
            <div className="loading-skeleton h-8 w-20"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Page Loading Component
export const PageLoading = ({ message = 'Loading...' }) => (
  <div className="flex flex-col items-center justify-center min-h-64 space-y-4">
    <LoadingSpinner size="xl" />
    <p className="text-gray-600 text-lg">{message}</p>
  </div>
)

// Empty State Component
export const EmptyState = ({ 
  icon: Icon, 
  title, 
  description, 
  action,
  className = '' 
}) => (
  <div className={`text-center py-12 ${className}`}>
    {Icon && (
      <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
        <Icon className="h-full w-full" />
      </div>
    )}
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6 max-w-sm mx-auto">{description}</p>
    {action && action}
  </div>
)

export default {
  LoadingSpinner,
  LoadingButton,
  SkeletonCard,
  SkeletonStats,
  SkeletonTable,
  PageLoading,
  EmptyState
}
