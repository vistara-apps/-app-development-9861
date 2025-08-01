import React, { createContext, useContext, useState, useCallback } from 'react'

const NotificationContext = createContext()

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random()
    const newNotification = {
      id,
      type: 'info',
      duration: 5000,
      ...notification
    }

    setNotifications(prev => [...prev, newNotification])
    return id
  }, [])

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }, [])

  const clearAllNotifications = useCallback(() => {
    setNotifications([])
  }, [])

  // Convenience methods for different notification types
  const showSuccess = useCallback((message, title, options = {}) => {
    return addNotification({
      type: 'success',
      title,
      message,
      ...options
    })
  }, [addNotification])

  const showError = useCallback((message, title, options = {}) => {
    return addNotification({
      type: 'error',
      title,
      message,
      duration: 7000, // Errors stay longer by default
      ...options
    })
  }, [addNotification])

  const showWarning = useCallback((message, title, options = {}) => {
    return addNotification({
      type: 'warning',
      title,
      message,
      ...options
    })
  }, [addNotification])

  const showInfo = useCallback((message, title, options = {}) => {
    return addNotification({
      type: 'info',
      title,
      message,
      ...options
    })
  }, [addNotification])

  const value = {
    notifications,
    addNotification,
    removeNotification,
    clearAllNotifications,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
